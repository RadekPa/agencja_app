import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTermSelectObjectSchema as dictAdvTermSelectObjectSchema } from './objects/dictAdvTermSelect.schema';
import { dictAdvTermWhereUniqueInputObjectSchema as dictAdvTermWhereUniqueInputObjectSchema } from './objects/dictAdvTermWhereUniqueInput.schema';

export const dictAdvTermDeleteOneSchema: z.ZodType<Prisma.dictAdvTermDeleteArgs> = z.object({ select: dictAdvTermSelectObjectSchema.optional(),  where: dictAdvTermWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictAdvTermDeleteArgs>;

export const dictAdvTermDeleteOneZodSchema = z.object({ select: dictAdvTermSelectObjectSchema.optional(),  where: dictAdvTermWhereUniqueInputObjectSchema }).strict();