import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTypeSelectObjectSchema as dictAdvTypeSelectObjectSchema } from './objects/dictAdvTypeSelect.schema';
import { dictAdvTypeWhereUniqueInputObjectSchema as dictAdvTypeWhereUniqueInputObjectSchema } from './objects/dictAdvTypeWhereUniqueInput.schema';

export const dictAdvTypeDeleteOneSchema: z.ZodType<Prisma.dictAdvTypeDeleteArgs> = z.object({ select: dictAdvTypeSelectObjectSchema.optional(),  where: dictAdvTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictAdvTypeDeleteArgs>;

export const dictAdvTypeDeleteOneZodSchema = z.object({ select: dictAdvTypeSelectObjectSchema.optional(),  where: dictAdvTypeWhereUniqueInputObjectSchema }).strict();