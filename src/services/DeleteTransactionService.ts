import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const transactionExists = await transactionsRepository.findOne(id);

    if (!transactionExists) {
      throw new AppError('This transaction does not exist.');
    }

    await transactionsRepository.remove(transactionExists);
  }
}

export default DeleteTransactionService;
