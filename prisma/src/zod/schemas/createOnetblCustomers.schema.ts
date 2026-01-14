import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustomersSelectObjectSchema as tblCustomersSelectObjectSchema } from './objects/tblCustomersSelect.schema';
import { tblCustomersIncludeObjectSchema as tblCustomersIncludeObjectSchema } from './objects/tblCustomersInclude.schema';
import { tblCustomersCreateInputObjectSchema as tblCustomersCreateInputObjectSchema } from './objects/tblCustomersCreateInput.schema';
import { tblCustomersUncheckedCreateInputObjectSchema as tblCustomersUncheckedCreateInputObjectSchema } from './objects/tblCustomersUncheckedCreateInput.schema';

export const tblCustomersCreateOneSchema: z.ZodType<Prisma.tblCustomersCreateArgs> = z.object({ select: tblCustomersSelectObjectSchema.optional(), include: tblCustomersIncludeObjectSchema.optional(), data: z.union([tblCustomersCreateInputObjectSchema, tblCustomersUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblCustomersCreateArgs>;

export const tblCustomersCreateOneZodSchema = z.object({ select: tblCustomersSelectObjectSchema.optional(), include: tblCustomersIncludeObjectSchema.optional(), data: z.union([tblCustomersCreateInputObjectSchema, tblCustomersUncheckedCreateInputObjectSchema]) }).strict();