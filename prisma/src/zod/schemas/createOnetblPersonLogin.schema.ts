import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonLoginSelectObjectSchema as tblPersonLoginSelectObjectSchema } from './objects/tblPersonLoginSelect.schema';
import { tblPersonLoginCreateInputObjectSchema as tblPersonLoginCreateInputObjectSchema } from './objects/tblPersonLoginCreateInput.schema';
import { tblPersonLoginUncheckedCreateInputObjectSchema as tblPersonLoginUncheckedCreateInputObjectSchema } from './objects/tblPersonLoginUncheckedCreateInput.schema';

export const tblPersonLoginCreateOneSchema: z.ZodType<Prisma.tblPersonLoginCreateArgs> = z.object({ select: tblPersonLoginSelectObjectSchema.optional(),  data: z.union([tblPersonLoginCreateInputObjectSchema, tblPersonLoginUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblPersonLoginCreateArgs>;

export const tblPersonLoginCreateOneZodSchema = z.object({ select: tblPersonLoginSelectObjectSchema.optional(),  data: z.union([tblPersonLoginCreateInputObjectSchema, tblPersonLoginUncheckedCreateInputObjectSchema]) }).strict();