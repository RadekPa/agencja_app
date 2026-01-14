import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransferDetailUpdateManyMutationInputObjectSchema as ArTransferDetailUpdateManyMutationInputObjectSchema } from './objects/ArTransferDetailUpdateManyMutationInput.schema';
import { ArTransferDetailWhereInputObjectSchema as ArTransferDetailWhereInputObjectSchema } from './objects/ArTransferDetailWhereInput.schema';

export const ArTransferDetailUpdateManySchema: z.ZodType<Prisma.ArTransferDetailUpdateManyArgs> = z.object({ data: ArTransferDetailUpdateManyMutationInputObjectSchema, where: ArTransferDetailWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArTransferDetailUpdateManyArgs>;

export const ArTransferDetailUpdateManyZodSchema = z.object({ data: ArTransferDetailUpdateManyMutationInputObjectSchema, where: ArTransferDetailWhereInputObjectSchema.optional() }).strict();