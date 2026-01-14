import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblFraVAT_NewCreateManyInputObjectSchema as tblFraVAT_NewCreateManyInputObjectSchema } from './objects/tblFraVAT_NewCreateManyInput.schema';

export const tblFraVAT_NewCreateManySchema: z.ZodType<Prisma.tblFraVAT_NewCreateManyArgs> = z.object({ data: z.union([ tblFraVAT_NewCreateManyInputObjectSchema, z.array(tblFraVAT_NewCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblFraVAT_NewCreateManyArgs>;

export const tblFraVAT_NewCreateManyZodSchema = z.object({ data: z.union([ tblFraVAT_NewCreateManyInputObjectSchema, z.array(tblFraVAT_NewCreateManyInputObjectSchema) ]),  }).strict();