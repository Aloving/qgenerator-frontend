import { IAnswer, IAnswersService } from '../interfaces';
import { IAuthTransport } from '../../../api/interfaces';
import { IAddAnswerDto } from '../dto';

export class AnswersService implements IAnswersService {
  private API_URL = '/api/answers';

  constructor(private _httpTransport: IAuthTransport) {}

  addAnswer = (payload: IAddAnswerDto) => {
    return this._httpTransport.post<IAnswer>(
      `${this.API_URL}/addAnswer`,
      payload,
    );
  };

  deleteAnswer = (id: IAnswer['id']) => {
    return this._httpTransport.delete<boolean>(`${this.API_URL}/${id}/delete`);
  };

  likeAnswer = (id: IAnswer['id']) => {
    return this._httpTransport.post<IAnswer>(`${this.API_URL}/${id}/like`);
  };

  dislikeAnswer = (id: IAnswer['id']) => {
    return this._httpTransport.post<IAnswer>(`${this.API_URL}/${id}/dislike`);
  };

  editAnswer = (id: IAnswer['id'], payload: Partial<IAnswer>) => {
    return this._httpTransport.put<IAnswer>(
      `${this.API_URL}/${id}/edit`,
      payload,
    );
  };
}
