import mockMovieData from '../__mock__/movieApiMock.js';  
import ReservationData from '../__mock__/reservationMock.js'; 

import {  getMovieList } from '../RESERVATION.js';
import reservationCounter from '../RESERVATION.js';

describe('Testing if the movies are retrieved from API perfectly', () => { 
    test('Testing item counter function is working', () => {
      // Arrange
      const movieArray = mockMovieData ;
      // Act
      const response = getMovieList(movieArray);
      // Assert
      expect(response.length).toBe(4);
    });
  
    test('Check movie title is the same', () => {
      // Arrange
      const movieArray = mockMovieData;
      // Act
      const response = getMovies(movieArray);
      // Assert
      expect(response[0].name).toBe('Under the Dome');
    });
  });
  
  describe('Testing if the Reservations are retrieved from the Involvement API correctly', () => {
    test('Testing Reservation counter function is working', () => {
      // Arrange
      const ReservationArray = ReservationData;
      // Act
      const response = reservationCounter(ReservationArray);
      // Assert
      expect(response.length).toBe(5);
    });
  
    test('Check that the first Reserve is from user with username "Ademola Owoeye"', () => {
      // Arrange
      const ReservationArray = ReservationData;
      // Act
      const response = reservationCounter(ReservationArray);
      // Assert
      expect(response[0].username).toBe('Ademola Owoeye');
    });
  });