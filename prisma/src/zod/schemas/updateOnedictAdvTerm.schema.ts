import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTermSelectObjectSchema as dictAdvTermSelectObjectSchema } from './objects/dictAdvTermSelect.schema';
import { dictAdvTermUpdateInputObjectSchema as dictAdvTermUpdateInputObjectSchema } from './objects/dictAdvTermUpdateInput.schema';
import { dictAdvTermUncheckedUpdateInputObjectSchema as dictAdvTermUncheckedUpdateInputObjectSchema } from './objects/dictAdvTermUncheckedUpdateInput.schema';
import { dictAdvTermWhereUniqueInputObjectSchema as dictAdvTermWhereUniqueInputObjectSchema } from './objects/dictAdvTermWhereUniqueInput.schema';

export const dictAdvTermUpdateOneSchema: z.ZodType<Prisma.dictAdvTermUpdateArgs> = z.object({ select: dictAdvTermSelectObjectSchema.optional(),  data: z.union([dictAdvTermUpdateInputObjectSchema, dictAdvTermUncheckedUpdateInputObjectSchema]), where: dictAdvTermWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictAdvTermUpdateArgs>;

export const dictAdvTermUpdateOneZodSchema = z.object({ select: dictAdvTermSelectObjectSchema.optional(),  data: z.union([dictAdvTermUpdateInputObjectSchema, dictAdvTermUncheckedUpdateInputObjectSchema]), where: dictAdvTermWhereUniqueInputObjectSchema }).strict();