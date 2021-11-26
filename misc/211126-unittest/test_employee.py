#!/usr/bin/env python3

import unittest

from employee import Employee

class EmployeeTestCase(unittest.TestCase):
    '''Tests for employee.py class as required in the assignment

    Going with AAA pattern in tests since it's quite easy to read and modify
    '''

    def setUp(self):
        '''Create default employee for our tests'''
        self.employee = Employee('firstname', 'surname', 1000)

    def test_give_default_raise(self):
        '''Assignment Q2 test 1, default raise should be 5000'''
        # Arrange test data and expected values
        expected_salary = self.employee.salary + 5000

        # Act: run the actual action under test
        self.employee.give_raise()

        # Assert results
        self.assertEqual(self.employee.salary, expected_salary)

    def test_give_custom_raise(self):
        '''Assignment Q2 test 2, custom raise should be allowed'''
        # Arrange test data and expected values
        given_raise = 3000
        expected_salary = self.employee.salary + given_raise

        # Act: run the actual action under test
        self.employee.give_raise(given_raise)

        # Assert results
        self.assertEqual(self.employee.salary, expected_salary)


if __name__ == '__main__':
    # Stand-alone test case, run with 'python3 test_employee.py'
    unittest.main()

