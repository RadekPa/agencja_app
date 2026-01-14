import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMatTypeSelectObjectSchema as dictMatTypeSelectObjectSchema } from './objects/dictMatTypeSelect.schema';
import { dictMatTypeWhereUniqueInputObjectSchema as dictMatTypeWhereUniqueInputObjectSchema } from './objects/dictMatTypeWhereUniqueInput.schema';

export const dictMatTypeFindUniqueSchema: z.ZodType<Prisma.dictMatTypeFindUniqueArgs> = z.object({ select: dictMatTypeSelectObjectSchema.optional(),  where: dictMatTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictMatTypeFindUniqueArgs>;

export const dictMatTypeFindUniqueZodSchema = z.object({ select: dictMatTypeSelectObjectSchema.optional(),  where: dictMatTypeWhereUniqueInputObjectSchema }).strict();