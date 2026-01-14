import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersUpdateOneRequiredWithoutTblUserAccessNestedInputObjectSchema as tblUsersUpdateOneRequiredWithoutTblUserAccessNestedInputObjectSchema } from './tblUsersUpdateOneRequiredWithoutTblUserAccessNestedInput.schema'

const makeSchema = () => z.object({
  tblUsers: z.lazy(() => tblUsersUpdateOneRequiredWithoutTblUserAccessNestedInputObjectSchema).optional()
}).strict();
export const tblUserAccessUpdateWithoutTblPlacesInputObjectSchema: z.ZodType<Prisma.tblUserAccessUpdateWithoutTblPlacesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUpdateWithoutTblPlacesInput>;
export const tblUserAccessUpdateWithoutTblPlacesInputObjectZodSchema = makeSchema();
