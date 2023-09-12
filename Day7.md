python
import os

# List of blog topics
blog_topics = {
    'Day3.md' : 'Machine Learning and AI',
    'Day4.md' : 'Cloud Computing',
    'Day5.md' : 'DevOps and CI/CD',
    'Day6.md' : 'Blockchain Development',
    'Day7.md' : 'Cybersecurity'
}

# Blog content (300 words each as per the requirement)
# The content is left empty for the purpose of this simulation.
contents = {
    '<300 words for Machine Learning and AI>',
    '<300 words for Cloud Computing>',
    '<300 words for DevOps and CI/CD>',
    '<300 words for Blockchain Development>',
    '<300 words for Cybersecurity>'
}

# Update files with blog content
for file_name, topic in blog_topics.items():
    if os.path.isfile(file_name):
        with open(file_name, 'a') as file:
            file.write(contents[topic])
    else:
        with open(file_name, 'w') as file:
            file.write(contents[topic])
