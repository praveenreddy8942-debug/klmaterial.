This repository includes a small helper to generate sample PDF files used by the static `materials.json`.

Files:
- tools/generate_pdfs.py  - Python script that generates 4 PDFs into `sample-files/`.
- requirements.txt        - pip requirements (reportlab)

How to generate PDFs locally:

1. Create a Python virtual environment (recommended):

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

2. Run the generator:

```bash
python3 tools/generate_pdfs.py
```

3. The PDFs will appear in `sample-files/`. Commit them if you want them served by GitHub Pages.

Notes:
- If you prefer to craft your own PDFs, place them under `sample-files/` and update `materials.json` accordingly.
- After adding PDFs, open `materials.html` to verify they appear in the materials list.
