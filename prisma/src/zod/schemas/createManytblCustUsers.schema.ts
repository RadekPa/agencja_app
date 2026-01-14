import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustUsersCreateManyInputObjectSchema as tblCustUsersCreateManyInputObjectSchema } from './objects/tblCustUsersCreateManyInput.schema';

export const tblCustUsersCreateManySchema: z.ZodType<Prisma.tblCustUsersCreateManyArgs> = z.object({ data: z.union([ tblCustUsersCreateManyInputObjectSchema, z.array(tblCustUsersCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblCustUsersCreateManyArgs>;

export const tblCustUsersCreateManyZodSchema = z.object({ data: z.union([ tblCustUsersCreateManyInputObjectSchema, z.array(tblCustUsersCreateManyInputObjectSchema) ]),  }).strict();