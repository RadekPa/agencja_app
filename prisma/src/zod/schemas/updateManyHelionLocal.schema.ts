import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HelionLocalUpdateManyMutationInputObjectSchema as HelionLocalUpdateManyMutationInputObjectSchema } from './objects/HelionLocalUpdateManyMutationInput.schema';
import { HelionLocalWhereInputObjectSchema as HelionLocalWhereInputObjectSchema } from './objects/HelionLocalWhereInput.schema';

export const HelionLocalUpdateManySchema: z.ZodType<Prisma.HelionLocalUpdateManyArgs> = z.object({ data: HelionLocalUpdateManyMutationInputObjectSchema, where: HelionLocalWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HelionLocalUpdateManyArgs>;

export const HelionLocalUpdateManyZodSchema = z.object({ data: HelionLocalUpdateManyMutationInputObjectSchema, where: HelionLocalWhereInputObjectSchema.optional() }).strict();