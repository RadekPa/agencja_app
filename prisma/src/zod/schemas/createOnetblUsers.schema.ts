import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUsersSelectObjectSchema as tblUsersSelectObjectSchema } from './objects/tblUsersSelect.schema';
import { tblUsersIncludeObjectSchema as tblUsersIncludeObjectSchema } from './objects/tblUsersInclude.schema';
import { tblUsersCreateInputObjectSchema as tblUsersCreateInputObjectSchema } from './objects/tblUsersCreateInput.schema';
import { tblUsersUncheckedCreateInputObjectSchema as tblUsersUncheckedCreateInputObjectSchema } from './objects/tblUsersUncheckedCreateInput.schema';

export const tblUsersCreateOneSchema: z.ZodType<Prisma.tblUsersCreateArgs> = z.object({ select: tblUsersSelectObjectSchema.optional(), include: tblUsersIncludeObjectSchema.optional(), data: z.union([tblUsersCreateInputObjectSchema, tblUsersUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblUsersCreateArgs>;

export const tblUsersCreateOneZodSchema = z.object({ select: tblUsersSelectObjectSchema.optional(), include: tblUsersIncludeObjectSchema.optional(), data: z.union([tblUsersCreateInputObjectSchema, tblUsersUncheckedCreateInputObjectSchema]) }).strict();