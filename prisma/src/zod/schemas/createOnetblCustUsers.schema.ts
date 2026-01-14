import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustUsersSelectObjectSchema as tblCustUsersSelectObjectSchema } from './objects/tblCustUsersSelect.schema';
import { tblCustUsersIncludeObjectSchema as tblCustUsersIncludeObjectSchema } from './objects/tblCustUsersInclude.schema';
import { tblCustUsersCreateInputObjectSchema as tblCustUsersCreateInputObjectSchema } from './objects/tblCustUsersCreateInput.schema';
import { tblCustUsersUncheckedCreateInputObjectSchema as tblCustUsersUncheckedCreateInputObjectSchema } from './objects/tblCustUsersUncheckedCreateInput.schema';

export const tblCustUsersCreateOneSchema: z.ZodType<Prisma.tblCustUsersCreateArgs> = z.object({ select: tblCustUsersSelectObjectSchema.optional(), include: tblCustUsersIncludeObjectSchema.optional(), data: z.union([tblCustUsersCreateInputObjectSchema, tblCustUsersUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblCustUsersCreateArgs>;

export const tblCustUsersCreateOneZodSchema = z.object({ select: tblCustUsersSelectObjectSchema.optional(), include: tblCustUsersIncludeObjectSchema.optional(), data: z.union([tblCustUsersCreateInputObjectSchema, tblCustUsersUncheckedCreateInputObjectSchema]) }).strict();