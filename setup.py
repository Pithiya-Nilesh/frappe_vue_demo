from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in custom_vue_app/__init__.py
from custom_vue_app import __version__ as version

setup(
	name="custom_vue_app",
	version=version,
	description="this app for connect vue with frappe",
	author="Nilesh Pithiya",
	author_email="nilesh@sanskartechnolab.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
