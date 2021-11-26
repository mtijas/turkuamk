#!/usr/bin/env python3
"""The assignment Q1 souce code as given in the SW dev course at TUAS"""


"""A collection of functions for working with cities."""

def city_country(city, country, population):
    """Return a string like 'Santiago, Chile - population 5000000'."""
    output_string = city.title() + ", " + country.title()
    output_string += ' - population ' + str(population)
    return output_string
