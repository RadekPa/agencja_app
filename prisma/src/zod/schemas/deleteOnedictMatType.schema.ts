import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMatTypeSelectObjectSchema as dictMatTypeSelectObjectSchema } from './objects/dictMatTypeSelect.schema';
import { dictMatTypeWhereUniqueInputObjectSchema as dictMatTypeWhereUniqueInputObjectSchema } from './objects/dictMatTypeWhereUniqueInput.schema';

export const dictMatTypeDeleteOneSchema: z.ZodType<Prisma.dictMatTypeDeleteArgs> = z.object({ select: dictMatTypeSelectObjectSchema.optional(),  where: dictMatTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictMatTypeDeleteArgs>;

export const dictMatTypeDeleteOneZodSchema = z.object({ select: dictMatTypeSelectObjectSchema.optional(),  where: dictMatTypeWhereUniqueInputObjectSchema }).strict();