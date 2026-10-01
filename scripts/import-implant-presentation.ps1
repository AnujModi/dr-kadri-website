param([Parameter(Mandatory = $true)][string]$MarkupPath)
$ErrorActionPreference = 'Stop'
$markup = [IO.File]::ReadAllText((Resolve-Path -LiteralPath $MarkupPath))
$groups = [regex]::Split($markup, '<div class="dental-implants-player pbhs-player ')
$modes = @()
$target = Join-Path $PSScriptRoot '../public/videos/dental-implants'
New-Item -ItemType Directory -Force $target | Out-Null
for ($i = 1; $i -lt $groups.Count; $i++) {
  $key = @('english', 'spanish', 'consultation')[$i - 1]
  $label = @('English', 'Español', 'Consultation')[$i - 1]
  $chapters = @()
  foreach ($match in [regex]::Matches($groups[$i], '(?s)data-video="([^"]+)">\s*<button><i[^>]*></i>\s*([^<]+)</button>')) {
    $id = $match.Groups[1].Value
    $title = [Net.WebUtility]::HtmlDecode($match.Groups[2].Value.Trim())
    $destination = Join-Path $target "$id.mp4"
    if (-not (Test-Path $destination)) {
      $metadata = Invoke-RestMethod "https://fast.wistia.com/embed/medias/$id.json"
      $asset = $metadata.media.assets | Where-Object { $_.type -match '^(iphone_video|mp4_video|md_mp4_video|hd_mp4_video)$' -and $_.size -lt 24000000 } | Sort-Object width -Descending | Select-Object -First 1
      if (-not $asset) { throw "No suitable MP4 for $title" }
      Invoke-WebRequest $asset.url -OutFile "$destination.download"
      Move-Item -LiteralPath "$destination.download" -Destination $destination
    }
    $chapters += @{ id = $id; title = $title; src = "/videos/dental-implants/$id.mp4" }
    Write-Output "$key : $title"
  }
  $modes += @{ id = $key; label = $label; chapters = $chapters }
}
$json = ConvertTo-Json -InputObject $modes -Depth 5
[IO.File]::WriteAllText((Join-Path $PSScriptRoot '../src/data/implantPresentation.ts'), "export const implantPresentation = $json;`n")
