import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyaltyUpdateManyMutationInputObjectSchema as tblRoyaltyUpdateManyMutationInputObjectSchema } from './objects/tblRoyaltyUpdateManyMutationInput.schema';
import { tblRoyaltyWhereInputObjectSchema as tblRoyaltyWhereInputObjectSchema } from './objects/tblRoyaltyWhereInput.schema';

export const tblRoyaltyUpdateManySchema: z.ZodType<Prisma.tblRoyaltyUpdateManyArgs> = z.object({ data: tblRoyaltyUpdateManyMutationInputObjectSchema, where: tblRoyaltyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblRoyaltyUpdateManyArgs>;

export const tblRoyaltyUpdateManyZodSchema = z.object({ data: tblRoyaltyUpdateManyMutationInputObjectSchema, where: tblRoyaltyWhereInputObjectSchema.optional() }).strict();