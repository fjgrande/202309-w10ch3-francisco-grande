import { type Request, type Response } from "express";
import PingController from "./PingController";

describe("Given a PingController's controller", () => {
  describe("When it receives a response", () => {
    const pingController = new PingController();
    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    pingController.getPong(req as Request, res as Response);

    test("Then it should call the response's method status with 200", () => {
      const expectedStatusCode = 200;

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's method json with a'🏓'", () => {
      const expectedMessage = { message: "🏓" };

      expect(res.status(200).json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
