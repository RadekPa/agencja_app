import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTermSelectObjectSchema as dictAdvTermSelectObjectSchema } from './objects/dictAdvTermSelect.schema';
import { dictAdvTermCreateInputObjectSchema as dictAdvTermCreateInputObjectSchema } from './objects/dictAdvTermCreateInput.schema';
import { dictAdvTermUncheckedCreateInputObjectSchema as dictAdvTermUncheckedCreateInputObjectSchema } from './objects/dictAdvTermUncheckedCreateInput.schema';

export const dictAdvTermCreateOneSchema: z.ZodType<Prisma.dictAdvTermCreateArgs> = z.object({ select: dictAdvTermSelectObjectSchema.optional(),  data: z.union([dictAdvTermCreateInputObjectSchema, dictAdvTermUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictAdvTermCreateArgs>;

export const dictAdvTermCreateOneZodSchema = z.object({ select: dictAdvTermSelectObjectSchema.optional(),  data: z.union([dictAdvTermCreateInputObjectSchema, dictAdvTermUncheckedCreateInputObjectSchema]) }).strict();