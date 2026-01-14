import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonSelectObjectSchema as tblPersonSelectObjectSchema } from './objects/tblPersonSelect.schema';
import { tblPersonCreateInputObjectSchema as tblPersonCreateInputObjectSchema } from './objects/tblPersonCreateInput.schema';
import { tblPersonUncheckedCreateInputObjectSchema as tblPersonUncheckedCreateInputObjectSchema } from './objects/tblPersonUncheckedCreateInput.schema';

export const tblPersonCreateOneSchema: z.ZodType<Prisma.tblPersonCreateArgs> = z.object({ select: tblPersonSelectObjectSchema.optional(),  data: z.union([tblPersonCreateInputObjectSchema, tblPersonUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblPersonCreateArgs>;

export const tblPersonCreateOneZodSchema = z.object({ select: tblPersonSelectObjectSchema.optional(),  data: z.union([tblPersonCreateInputObjectSchema, tblPersonUncheckedCreateInputObjectSchema]) }).strict();