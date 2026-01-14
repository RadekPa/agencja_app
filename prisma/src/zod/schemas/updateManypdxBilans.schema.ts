import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxBilansUpdateManyMutationInputObjectSchema as pdxBilansUpdateManyMutationInputObjectSchema } from './objects/pdxBilansUpdateManyMutationInput.schema';
import { pdxBilansWhereInputObjectSchema as pdxBilansWhereInputObjectSchema } from './objects/pdxBilansWhereInput.schema';

export const pdxBilansUpdateManySchema: z.ZodType<Prisma.pdxBilansUpdateManyArgs> = z.object({ data: pdxBilansUpdateManyMutationInputObjectSchema, where: pdxBilansWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.pdxBilansUpdateManyArgs>;

export const pdxBilansUpdateManyZodSchema = z.object({ data: pdxBilansUpdateManyMutationInputObjectSchema, where: pdxBilansWhereInputObjectSchema.optional() }).strict();