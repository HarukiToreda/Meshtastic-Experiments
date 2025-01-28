---
layout: default
title: Gerber PCB Files
pcbs:
  - name: "E290 Shield"
    image_url: "/assets/images/E290 Shield.png"
    github_url: "https://github.com/your-username/your-repo/blob/main/path/to/pcb1/files"

  - name: "PCB Design 2"
    image_url: "/assets/images/pcb2.jpg"
    github_url: "https://github.com/your-username/your-repo/blob/main/path/to/pcb2/files"

  - name: "PCB Design 3"
    image_url: "/assets/images/pcb3.jpg"
    github_url: "https://github.com/your-username/your-repo/blob/main/path/to/pcb3/files"
---

# Gerber PCB Files

Below is a gallery of PCB designs. Click on any image to view and download the Gerber files from GitHub.

## Gallery

<div class="gallery">
  {% for pcb in page.pcbs %}
    <div class="gallery-item">
      <a href="{{ pcb.github_url }}" target="_blank">
        <img src="{{ pcb.image_url }}" alt="{{ pcb.name }}">
      </a>
      <p>{{ pcb.name }}</p>
    </div>
  {% endfor %}
</div>

## How It Works

1. **Click on a PCB Image**: This will take you to the GitHub page where the Gerber files are stored.
2. **Download the Files**: On GitHub, you can download the Gerber files directly.
3. **Manufacturing**: Send the Gerber files to a PCB manufacturer to get your boards made.

<style>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .gallery-item {
    flex: 1 1 calc(33.333% - 40px);
    box-sizing: border-box;
    text-align: center;
  }
  .gallery-item img {
    max-width: 100%;
    height: auto;
    border: 2px solid #FFD700;
    border-radius: 5px;
  }
  .gallery-item p {
    margin-top: 10px;
    font-size: 14px;
    color: #FFD700;
  }
</style>
