const { mockRequest, mockResponse } = require('../util/util.interceptor');
const personaController = require('../controllers/persona.controller');
const { getPersonas } = require('../controllers/persona.controller');

describe("Check method \'personaController\' ", () => {
    // test('should 200 and return correct value', async () => {
    //   let req = mockRequest();
    //   req.params.id = 1;
    //   const res = mockResponse();
  
    //   await controller.personaController(req, res);
  
    //   expect(res.send).toHaveBeenCalledTimes(1)
    //   expect(res.send.mock.calls.length).toBe(1);
    //   expect(res.send).toHaveBeenCalledWith('Hello i am todo controller');
    // });
  
    // test('should 404 and return correct value', async () => {
    //   let req = mockRequest();
    //   req.params.id = null;
    //   const res = mockResponse();
  
    //   await controller.personaController(req, res);
  
    //   expect(res.status).toHaveBeenCalledWith(404);
    //   expect(res.json).toHaveBeenCalledWith({ message: 'Not Found' });
    // });

    test('should test getPersonas', async () => {
        const personas = [
            {
                "id": 5,
                "nombre": "xoe"
            },
            {
                "id": 1,
                "nombre": "alixa"
            },
            {
                "id": 2,
                "nombre": "alix"
            },
            {
                "id": 4,
                "nombre": "xato"
            },
            {
                "id": 9,
                "nombre": "xoea"
            },
            {
                "id": 12,
                "nombre": "xalexa"
            },
            {
                "id": 3,
                "nombre": "caduc"
            }
        ]

        expect(getPersonas().toBe(personas));
    });
  });