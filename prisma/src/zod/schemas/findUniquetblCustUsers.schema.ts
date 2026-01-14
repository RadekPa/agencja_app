import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustUsersSelectObjectSchema as tblCustUsersSelectObjectSchema } from './objects/tblCustUsersSelect.schema';
import { tblCustUsersIncludeObjectSchema as tblCustUsersIncludeObjectSchema } from './objects/tblCustUsersInclude.schema';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './objects/tblCustUsersWhereUniqueInput.schema';

export const tblCustUsersFindUniqueSchema: z.ZodType<Prisma.tblCustUsersFindUniqueArgs> = z.object({ select: tblCustUsersSelectObjectSchema.optional(), include: tblCustUsersIncludeObjectSchema.optional(), where: tblCustUsersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblCustUsersFindUniqueArgs>;

export const tblCustUsersFindUniqueZodSchema = z.object({ select: tblCustUsersSelectObjectSchema.optional(), include: tblCustUsersIncludeObjectSchema.optional(), where: tblCustUsersWhereUniqueInputObjectSchema }).strict();