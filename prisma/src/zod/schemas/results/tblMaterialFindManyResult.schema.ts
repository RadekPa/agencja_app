import * as z from 'zod';
export const tblMaterialFindManyResultSchema = z.object({
  data: z.array(z.object({
  MatID: z.number().int(),
  AgrID: z.number().int(),
  MatTypeID: z.number().int(),
  Amount: z.number(),
  Currency: z.string().optional(),
  Remarks: z.string().optional(),
  RequestDate: z.date().optional(),
  ReceiveDate: z.date().optional()
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