import { Request, Response, NextFunction } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export function validateDTO(DTOClass: any) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const dto = plainToInstance(DTOClass, req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      res.status(400).json({ errors });
      return;
    }

    next();
  };
}

