import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustBankCreateManyInputObjectSchema as tblCustBankCreateManyInputObjectSchema } from './objects/tblCustBankCreateManyInput.schema';

export const tblCustBankCreateManySchema: z.ZodType<Prisma.tblCustBankCreateManyArgs> = z.object({ data: z.union([ tblCustBankCreateManyInputObjectSchema, z.array(tblCustBankCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblCustBankCreateManyArgs>;

export const tblCustBankCreateManyZodSchema = z.object({ data: z.union([ tblCustBankCreateManyInputObjectSchema, z.array(tblCustBankCreateManyInputObjectSchema) ]),  }).strict();