import * as z from 'zod';
export const PearsonMaterialFindManyResultSchema = z.object({
  data: z.array(z.object({
  MyNumber: z.number().int(),
  ContractID: z.number().int(),
  InvoiceNumber: z.string().optional(),
  InvoiceDate: z.date().optional(),
  Publisher: z.string().optional(),
  Title: z.string().optional(),
  ISBN: z.string().optional(),
  Amount: z.number().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});