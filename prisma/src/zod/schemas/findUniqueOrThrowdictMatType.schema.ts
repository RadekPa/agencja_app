import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMatTypeSelectObjectSchema as dictMatTypeSelectObjectSchema } from './objects/dictMatTypeSelect.schema';
import { dictMatTypeWhereUniqueInputObjectSchema as dictMatTypeWhereUniqueInputObjectSchema } from './objects/dictMatTypeWhereUniqueInput.schema';

export const dictMatTypeFindUniqueOrThrowSchema: z.ZodType<Prisma.dictMatTypeFindUniqueOrThrowArgs> = z.object({ select: dictMatTypeSelectObjectSchema.optional(),  where: dictMatTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictMatTypeFindUniqueOrThrowArgs>;

export const dictMatTypeFindUniqueOrThrowZodSchema = z.object({ select: dictMatTypeSelectObjectSchema.optional(),  where: dictMatTypeWhereUniqueInputObjectSchema }).strict();