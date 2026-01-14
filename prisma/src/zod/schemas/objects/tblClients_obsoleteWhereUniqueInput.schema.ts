import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.number().int().optional()
}).strict();
export const tblClients_obsoleteWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteWhereUniqueInput>;
export const tblClients_obsoleteWhereUniqueInputObjectZodSchema = makeSchema();
