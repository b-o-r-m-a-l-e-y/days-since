import { Request, Response, NextFunction } from 'express';
import fs from 'fs';

class Controller {
  public static updateDate = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req.params
    let id: number = parseInt(req.params.id);
    // get the data from req.body
    console.log(req.body);
    let lastDate: string = req.body.lastDate ?? null;
    var rdCfg = fs.readFileSync('./config.json', 'utf-8');
    var jsonCfg = JSON.parse(rdCfg);
    jsonCfg.counters[id].lastDate = lastDate;
    fs.writeFileSync('./config.json', JSON.stringify(jsonCfg, null, 2), 'utf-8');
    return res.sendStatus(200);
  };
  public static getConfig = async (req: Request, res: Response, next: NextFunction) => {
    var rdCfg = fs.readFileSync('./config.json', 'utf-8');
    var jsonCfg = JSON.parse(rdCfg);
    return res.json(jsonCfg);
  };
}

export default Controller;