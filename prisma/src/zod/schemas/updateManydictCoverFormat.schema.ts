import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCoverFormatUpdateManyMutationInputObjectSchema as dictCoverFormatUpdateManyMutationInputObjectSchema } from './objects/dictCoverFormatUpdateManyMutationInput.schema';
import { dictCoverFormatWhereInputObjectSchema as dictCoverFormatWhereInputObjectSchema } from './objects/dictCoverFormatWhereInput.schema';

export const dictCoverFormatUpdateManySchema: z.ZodType<Prisma.dictCoverFormatUpdateManyArgs> = z.object({ data: dictCoverFormatUpdateManyMutationInputObjectSchema, where: dictCoverFormatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictCoverFormatUpdateManyArgs>;

export const dictCoverFormatUpdateManyZodSchema = z.object({ data: dictCoverFormatUpdateManyMutationInputObjectSchema, where: dictCoverFormatWhereInputObjectSchema.optional() }).strict();