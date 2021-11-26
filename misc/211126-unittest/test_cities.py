#!/usr/bin/env python3

import unittest

from cities import city_country

class CitiesTestCase(unittest.TestCase):
    '''Tests for cities.py function as required in the assignment

    Going with AAA pattern in tests since it's quite easy to read and modify
    '''

    def test_city_country(self):
        '''Assignment Q1 test 1, test titling country and city'''
        # Arrange test data and expected values
        city = 'santiago'
        country = 'chile'
        population = 42 # we need population, see cities.py
        expected = 'Santiago, Chile - population 42'

        # Act: run the actual action under test
        city_country_string = city_country(city, country, population)

        # Assert results
        self.assertEqual(city_country_string, expected)

    def test_city_country_population(self):
        '''Assignment Q1 test 2, test assigning population differently'''
        # Arrange test data and expected values
        city = 'santiago'
        country = 'chile'
        population = 5000000
        expected = 'Santiago, Chile - population 5000000'

        # Act: run the actual action under test
        city_country_string = city_country(city, country, population=population)

        # Assert results
        self.assertEqual(city_country_string, expected)


if __name__ == '__main__':
    # Stand-alone test case, run with 'python3 test_cities.py'
    unittest.main()

