#!/usr/bin/env python3
"""
Generate sample PDF files for subjects: PSC, BEEC, DSD, DM
Requires: reportlab (pip install reportlab)

Run:
  python3 tools/generate_pdfs.py

This will create a `sample-files/` directory (if missing) and write four PDFs.
"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

OUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'sample-files')
os.makedirs(OUT_DIR, exist_ok=True)

files = [
    ("BEEC_Intro_to_Circuits.pdf", "Basic Electrical & Electronic Circuits (BEEC)", [
        "Unit 1: Circuit fundamentals",
        "Unit 2: Resistors & Ohm's law",
        "Unit 3: RC circuits and transients",
        "Unit 4: Basic diodes and transistors",
    ]),
    ("DM_SetTheory_Notes.pdf", "Discrete Mathematics (DM)", [
        "Set theory basics",
        "Logic and proofs",
        "Relations and functions",
        "Combinatorics introduction",
    ]),
    ("DSD_Data_Structures_Notes.pdf", "Data Structures (DSD)", [
        "Arrays & Linked Lists",
        "Stacks and Queues",
        "Trees and Graphs",
        "Hashing and complexity",
    ]),
    ("PSC_Problem_Solving_Concepts.pdf", "Problem Solving & C Programming (PSC)", [
        "Problem solving steps",
        "Basic C syntax",
        "Control structures",
        "Sample problems and solutions",
    ]),
]

for filename, title, bullets in files:
    path = os.path.join(OUT_DIR, filename)
    c = canvas.Canvas(path, pagesize=A4)
    width, height = A4
    c.setFont('Helvetica-Bold', 18)
    c.drawString(40, height - 60, title)
    c.setFont('Helvetica', 12)
    y = height - 100
    for b in bullets:
        c.drawString(60, y, '• ' + b)
        y -= 22
        if y < 80:
            c.showPage()
            y = height - 60
    c.showPage()
    c.save()
    print('Wrote', path)

print('Done. PDF files are under:', OUT_DIR)
