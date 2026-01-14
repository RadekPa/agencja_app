import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyaltyCreateManyInputObjectSchema as tblRoyaltyCreateManyInputObjectSchema } from './objects/tblRoyaltyCreateManyInput.schema';

export const tblRoyaltyCreateManySchema: z.ZodType<Prisma.tblRoyaltyCreateManyArgs> = z.object({ data: z.union([ tblRoyaltyCreateManyInputObjectSchema, z.array(tblRoyaltyCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblRoyaltyCreateManyArgs>;

export const tblRoyaltyCreateManyZodSchema = z.object({ data: z.union([ tblRoyaltyCreateManyInputObjectSchema, z.array(tblRoyaltyCreateManyInputObjectSchema) ]),  }).strict();