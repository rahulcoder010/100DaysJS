
import os
import lorem

file_names = {
    "Day3.md": "Machine Learning and AI",
    "Day4.md": "Cloud Computing",
    "Day5.md": "DevOps and CI/CD",
    "Day6.md": "Blockchain Development",
    "Day7.md": "Cybersecurity",
}

for file_name, topic in file_names.items():
    with open(file_name, "w") as f:
        f.write(f"# {topic}\n\n")
        f.write(lorem.text())

