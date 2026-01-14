import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrTemplatesUpdateManyMutationInputObjectSchema as dictAgrTemplatesUpdateManyMutationInputObjectSchema } from './objects/dictAgrTemplatesUpdateManyMutationInput.schema';
import { dictAgrTemplatesWhereInputObjectSchema as dictAgrTemplatesWhereInputObjectSchema } from './objects/dictAgrTemplatesWhereInput.schema';

export const dictAgrTemplatesUpdateManySchema: z.ZodType<Prisma.dictAgrTemplatesUpdateManyArgs> = z.object({ data: dictAgrTemplatesUpdateManyMutationInputObjectSchema, where: dictAgrTemplatesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictAgrTemplatesUpdateManyArgs>;

export const dictAgrTemplatesUpdateManyZodSchema = z.object({ data: dictAgrTemplatesUpdateManyMutationInputObjectSchema, where: dictAgrTemplatesWhereInputObjectSchema.optional() }).strict();