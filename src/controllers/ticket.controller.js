import { ticketService } from '../services/ticket.service.js';

export const createTicket = async (req, res, next) => {
  try {
    const { eid } = req.params;
    const userId = req.user.id;
    const { quantity } = req.body;

    const newTicket = await ticketService.createTicket(eid, userId, quantity || 1);

    res.status(201).json({
      status: 'success',
      message: 'Inscripción realizada exitosamente',
      payload: newTicket
    });
  } catch (error) {
    next(error);
  }
};

export const getMyTickets = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const tickets = await ticketService.getMyTickets(userId);

    res.status(200).json({
      status: 'success',
      payload: tickets
    });
  } catch (error) {
    next(error);
  }
};

export const getEventTickets = async (req, res, next) => {
  try {
    const { eid } = req.params;
    const tickets = await ticketService.getEventTickets(eid, req.user);

    res.status(200).json({
      status: 'success',
      payload: tickets
    });
  } catch (error) {
    next(error);
  }
};

export const cancelTicket = async (req, res, next) => {
  try {
    const { tid } = req.params;
    const cancelledTicket = await ticketService.cancelTicket(tid, req.user);

    res.status(200).json({
      status: 'success',
      message: 'Ticket cancelado exitosamente',
      payload: cancelledTicket
    });
  } catch (error) {
    next(error);
  }
};