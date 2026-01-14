import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCopyTypeUpdateManyMutationInputObjectSchema as dictCopyTypeUpdateManyMutationInputObjectSchema } from './objects/dictCopyTypeUpdateManyMutationInput.schema';
import { dictCopyTypeWhereInputObjectSchema as dictCopyTypeWhereInputObjectSchema } from './objects/dictCopyTypeWhereInput.schema';

export const dictCopyTypeUpdateManySchema: z.ZodType<Prisma.dictCopyTypeUpdateManyArgs> = z.object({ data: dictCopyTypeUpdateManyMutationInputObjectSchema, where: dictCopyTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictCopyTypeUpdateManyArgs>;

export const dictCopyTypeUpdateManyZodSchema = z.object({ data: dictCopyTypeUpdateManyMutationInputObjectSchema, where: dictCopyTypeWhereInputObjectSchema.optional() }).strict();