/**
 * @jest-environment jsdom
 */

import ReserveCount from './__MockReservations__/reserveMock.js'; 

test('reservation counter test',  () => {
    expect(ReserveCount()).toEqual(1);
  });

