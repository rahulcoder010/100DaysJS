Python
import os

def write_blog(filepath, content):
    with open(filepath, 'w') as file:
        file.write(content)

topics = {
    "Day3.md" : "Machine Learning and AI",
    "Day4.md" : "Cloud Computing",
    "Day5.md" : "DevOps and CI/CD",
    "Day6.md" : "Blockchain Development",
    "Day7.md" : "Cybersecurity"
}

content = "Lorem ipsum..."  # The content will be 300 words

for filepath, topic in topics.items():
    if os.path.exists(filepath):
        with open(filepath, 'r') as file:
            if topic not in file.read():
                write_blog(filepath, content)
    else:
        write_blog(filepath, content)
