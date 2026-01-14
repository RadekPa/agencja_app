import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTermSelectObjectSchema as dictAdvTermSelectObjectSchema } from './objects/dictAdvTermSelect.schema';
import { dictAdvTermWhereUniqueInputObjectSchema as dictAdvTermWhereUniqueInputObjectSchema } from './objects/dictAdvTermWhereUniqueInput.schema';

export const dictAdvTermFindUniqueOrThrowSchema: z.ZodType<Prisma.dictAdvTermFindUniqueOrThrowArgs> = z.object({ select: dictAdvTermSelectObjectSchema.optional(),  where: dictAdvTermWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictAdvTermFindUniqueOrThrowArgs>;

export const dictAdvTermFindUniqueOrThrowZodSchema = z.object({ select: dictAdvTermSelectObjectSchema.optional(),  where: dictAdvTermWhereUniqueInputObjectSchema }).strict();