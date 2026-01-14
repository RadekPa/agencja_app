import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArDefaultAccountSelectObjectSchema as ArDefaultAccountSelectObjectSchema } from './objects/ArDefaultAccountSelect.schema';
import { ArDefaultAccountCreateInputObjectSchema as ArDefaultAccountCreateInputObjectSchema } from './objects/ArDefaultAccountCreateInput.schema';
import { ArDefaultAccountUncheckedCreateInputObjectSchema as ArDefaultAccountUncheckedCreateInputObjectSchema } from './objects/ArDefaultAccountUncheckedCreateInput.schema';

export const ArDefaultAccountCreateOneSchema: z.ZodType<Prisma.ArDefaultAccountCreateArgs> = z.object({ select: ArDefaultAccountSelectObjectSchema.optional(),  data: z.union([ArDefaultAccountCreateInputObjectSchema, ArDefaultAccountUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ArDefaultAccountCreateArgs>;

export const ArDefaultAccountCreateOneZodSchema = z.object({ select: ArDefaultAccountSelectObjectSchema.optional(),  data: z.union([ArDefaultAccountCreateInputObjectSchema, ArDefaultAccountUncheckedCreateInputObjectSchema]) }).strict();