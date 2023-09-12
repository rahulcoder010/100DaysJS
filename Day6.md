python
from docx import Document
import os

topics = {
    "Day3.md": "Machine Learning and AI",
    "Day4.md": "Cloud Computing",
    "Day5.md": "DevOps and CI/CD",
    "Day6.md": "Blockchain Development",
    "Day7.md": "Cybersecurity"
}

for filename, topic in topics.items():
    if os.path.exists(filename):
        doc = Document(filename)
    else:
        doc = Document()

    doc.add_heading(topic, 0)

    # TODO: Add the 300 words blog content for each topic here
    doc.add_paragraph("")

    doc.save(filename)
