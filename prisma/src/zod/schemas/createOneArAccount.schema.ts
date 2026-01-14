import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArAccountSelectObjectSchema as ArAccountSelectObjectSchema } from './objects/ArAccountSelect.schema';
import { ArAccountCreateInputObjectSchema as ArAccountCreateInputObjectSchema } from './objects/ArAccountCreateInput.schema';
import { ArAccountUncheckedCreateInputObjectSchema as ArAccountUncheckedCreateInputObjectSchema } from './objects/ArAccountUncheckedCreateInput.schema';

export const ArAccountCreateOneSchema: z.ZodType<Prisma.ArAccountCreateArgs> = z.object({ select: ArAccountSelectObjectSchema.optional(),  data: z.union([ArAccountCreateInputObjectSchema, ArAccountUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ArAccountCreateArgs>;

export const ArAccountCreateOneZodSchema = z.object({ select: ArAccountSelectObjectSchema.optional(),  data: z.union([ArAccountCreateInputObjectSchema, ArAccountUncheckedCreateInputObjectSchema]) }).strict();